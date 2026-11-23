import sqlite3

def insert_into_table(db_path, table_name, data):
    with sqlite3.connect(db_path) as conn:
        columns = ', '.join(data.keys())
        placeholders = ', '.join(['?'] * len(data))
        sql = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        conn.execute(sql, tuple(data.values()))
        conn.commit()
