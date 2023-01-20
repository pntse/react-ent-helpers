declare class Compare {
    depthTracking: {
        depth: number;
        path: Array<string>;
    };
    value: any;
    log: {
        a: any;
        b: any;
        message: string;
        path: string;
    };
    errorStyles: string;
    standardStyles: string;
    pathStyles: string;
    clientLogger: object;
    constructor();
    /**
     * Must be called at the end of the chain to return the result of the comparison.
     */
    get isEqual(): any;
    /**
     * Set strictEquality to false to coerce conversion if values are different types. Defaults to true.
     *
     * @param {*} a
     * @param {*} b
     * @param {boolean} strictEquality
     */
    deepCompare: (a: any, b: any, strictEquality?: boolean) => this;
    /**
     * Will log details to the console if an inequality is found.
     *
     * @param {boolean} shouldLog
     */
    consoleLog: (shouldLog?: boolean) => this;
    /**
     * Will log details of comparison as a console error if result doesn't match the assertTrue boolean.
     *
     * @param {boolean} assertTrue
     */
    assert: (assertTrue: boolean) => this;
    /**
     * Allows for the use of a third party logger function.
     *
     * @param {function} clientLogger
     * @param {boolean} enableLogger
     */
    attachLogger: (clientLogger: object, enableLogger?: boolean) => this;
    /**
     * Fail the comparison, log the error message and inequal values,
     * and decrement the recursion depth before returning to previous level.
     *
     * @param {*} a
     * @param {*} b
     * @param {string} message
     */
    _fail: (a: any, b: any, message: string) => this;
    /**
     * Pass the comparison and decrement the recursion depth before returning to previous level.
     */
    _pass: () => this;
    /**
     * @param {*} a
     * @param {*} b
     * @param {string} message
     */
    _logOutput: (a: any, b: any, message: string) => void;
    /**
     * Increment depth after drilling down to a new level.
     */
    _incrementDepth: () => void;
    /**
     * Decrement depth before returning to a previous level.
     * If at the highest level and an error message exists, log the error.
     */
    _decrementDepth: () => void;
    /**
     * Should reset the log object if necessary.
     */
    _resetLog: () => void;
}
declare const _default: Compare;
export default _default;
