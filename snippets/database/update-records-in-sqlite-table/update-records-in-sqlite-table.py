import sqlite3

def update_table(db_path, table_name, updates, where_clause=None):
    with sqlite3.connect(db_path) as conn:
        set_clause = ', '.join([f"{col} = ?" for col in updates.keys()])
        sql = f"UPDATE {table_name} SET {set_clause}"
        if where_clause:
            sql += f" WHERE {where_clause}"
        conn.execute(sql, tuple(updates.values()))
        conn.commit()
