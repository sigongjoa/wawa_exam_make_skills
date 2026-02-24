import sys
import json
from duckduckgo_search import DDGS

# v1.1: 다중 지문 검색 지원 및 JSON 출력 지원
def search_topics(queries):
    all_results = {}
    with DDGS() as ddgs:
        for q in queries:
            try:
                results = list(ddgs.text(q, max_results=2))
                all_results[q] = results
            except Exception as e:
                all_results[q] = f"Error: {str(e)}"
    
    # 에이전트가 소비하기 좋게 JSON으로 출력
    print(json.dumps(all_results, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    if len(sys.argv) > 1:
        # 콤마로 구분된 여러 주제를 받음
        topics = sys.argv[1].split(',')
        search_topics(topics)
    else:
        print("Usage: python3 search_source.py 'topic1,topic2'")
