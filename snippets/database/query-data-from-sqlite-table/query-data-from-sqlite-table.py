import sqlite3

def query_table(db_path, table_name, columns='*', where_clause=None):
    with sqlite3.connect(db_path) as conn:
        cursor = conn.cursor()
        sql = f"SELECT {columns} FROM {table_name}"
        if where_clause:
            sql += f" WHERE {where_clause}"
        cursor.execute(sql)
        return cursor.fetchall()
