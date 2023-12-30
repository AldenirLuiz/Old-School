# assim podemos declara uma variável do tipo Dict:
my_dict = dict()

# ou diretamente usando chaves {}
my_dict :dict = dict() # o typeHint :dict e opcional

# também podemos declarar diretamente seu conteúdo:
my_dict = {"nome": "Aldenir", "sobrenome": "Luiz", "idade": 29}

print(my_dict) # resultado no console: {'nome': 'Aldenir', 'sobrenome': 'Luiz', 'idade': 29}