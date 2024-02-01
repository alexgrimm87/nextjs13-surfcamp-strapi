const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env('DATABASE_HOST', 'SUPABASE_DATABASE_HOST'),
      port: env('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'SUPABASE_DATABASE_NAME'),
      user: env('DATABASE_USERNAME', 'SUPABASE_DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD', 'SUPABASE_DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false)
    },
    useNullAsDefault: true
  }
});
