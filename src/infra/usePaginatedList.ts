import {
  InfiniteData,
  useInfiniteQuery,
  QueryObserverResult,
} from '@tanstack/react-query';

import {ListResponse} from '@services';


interface UseListResult<T> {
  list: T[];
  isError: boolean;
  isLoading: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  refresh: () => Promise<
    QueryObserverResult<InfiniteData<ListResponse<T>>>
  >;
};

export function usePaginatedList<T>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<ListResponse<T>>,
): UseListResult<T> {

  function getLastPage(lastPage: ListResponse<T>) {
    const nextPage = lastPage.page < lastPage.total_pages ? lastPage.page + 1 : null;
    return nextPage;
  }

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: lastPage => getLastPage(lastPage),
  });

  const list = query.data?.pages.flatMap(page => page.results) || [];

  const fetchNextPage = () => {
    if (query.hasNextPage) {
      query.fetchNextPage();
    }
  };

  return {
    list,
    fetchNextPage,
    refresh: query.refetch,
    isError: query.isError,
    isLoading: query.isLoading,
    hasNextPage: !!query.hasNextPage,
  };
};
