import sys
from duckduckgo_search import DDGS

# 에이전트가 지문 검색을 위해 사용할 기본 스크립트입니다.
# 사용법: python search_source.py "기후 변화 최신 논문"

def search_text(query):
    print(f"[{query}]에 대한 지문 소스를 검색 중입니다...
")
    try:
        results = DDGS().text(query, max_results=3)
        for i, r in enumerate(results):
            print(f"--- 소스 {i+1} ---")
            print(f"제목: {r['title']}")
            print(f"링크: {r['href']}")
            print(f"본문 요약: {r['body']}
")
    except Exception as e:
        print(f"검색 중 오류 발생: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        search_text(sys.argv[1])
    else:
        print("검색어를 입력해주세요. 예: python search_source.py '인공지능 윤리'")
