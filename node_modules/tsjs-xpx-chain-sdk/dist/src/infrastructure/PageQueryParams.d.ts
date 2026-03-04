/**
 * The query params structure describes pagination by page number and page size.
 *
 * @since 1.0
 */
export declare class PageQueryParams {
    /**
     * Page size between 10 and 100, otherwise 25
     */
    readonly pageSize?: number | undefined;
    /**
     * Page number should be non negative number, otherwise 0 (first page)
     */
    readonly page?: number | undefined;
    /**
     * Constructor
     * @param pageSize
     * @param page
     */
    constructor(
    /**
     * Page size between 10 and 100, otherwise 25
     */
    pageSize?: number | undefined, 
    /**
     * Page number should be non negative number, otherwise 0 (first page)
     */
    page?: number | undefined);
}
