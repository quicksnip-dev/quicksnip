import sqlite3

def create_table(db_name, table_name, schema):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    schema_string = ', '.join([f'{col} {dtype}' for col, dtype in schema.items()])
    cursor.execute(f'''
        CREATE TABLE IF NOT EXISTS {table_name} (
            {schema_string}
        )''')
    conn.commit()
    conn.close()
