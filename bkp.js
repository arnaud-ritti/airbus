module.exports = {
	PUBLIC_URL: "https://airbus-poc.herokuapp.com",
    KEY:"d8ff7510-d355-4acb-acd4-8628aec67b10",
    SECRET:"eGJQN7zXPzUs5Hh9ZRQ-pF_XybB4QQdM",

    DB_CLIENT:"sqlite3",
    DB_FILENAME:"/app/data.db",

    CACHE_ENABLED:'false',

    STORAGE_LOCATIONS:"local",
    STORAGE_LOCAL_DRIVER:"local",
    STORAGE_LOCAL_ROOT:"/app/uploads",

    ADMIN_EMAIL:'admin@adeliom.com',
    ADMIN_PASSWORD:'adminadmin',

    EXTENSIONS_PATH:'./extensions',
    EXTENSIONS_AUTO_RELOAD:'true',

    ACCESS_TOKEN_TTL:"15m",
    REFRESH_TOKEN_TTL:"7d",
    REFRESH_TOKEN_COOKIE_SECURE:false,
    REFRESH_TOKEN_COOKIE_SAME_SITE:"lax",
    REFRESH_TOKEN_COOKIE_NAME:"directus_refresh_token"
};