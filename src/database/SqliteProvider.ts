class SqliteProvider {
    public readonly dialect = 'sqlite';
    /**
     * @param {string} storage - path to the database dir, if not passed - in memory
     * @example
     * const dbProviderInMemory = new SqliteProvider();
     * const dbProviderInHardDisk = new SqliteProvider('./db');
     */
    constructor(public readonly storage: string = ":memory:") {}
}

export default SqliteProvider;