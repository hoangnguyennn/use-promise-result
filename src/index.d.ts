type HandleReload = () => void;

type DataProvider<D = any> = () => Promise<D>;

export interface PromiseResult<D = any, E = any> {
  /**
   * indicate state of the promise returned from dataProvider
   */
  loading: boolean;
  /**
   * value returned from dataProvider
   */
  data: D;
  /**
   * error throw from dataProvider
   */
  error: E;
  /**
   * data available or not
   */
  success: boolean;
  /**
   * number of time dataProvider get involved, use this with initFetch = false
   */
  reloadCount: number;
  /**
   * call this function to reload data
   */
  reload: HandleReload;
}

export declare function usePromiseResult<D = any, E = any>(dataProvider: DataProvider<D>, initFetch?: boolean): PromiseResult<D, E>;
