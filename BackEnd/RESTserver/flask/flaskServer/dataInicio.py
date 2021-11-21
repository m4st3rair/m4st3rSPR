import requests
paisesData={
    'paises':[
        'Albania', 'Alemania', 'Andorra', 'Angola', 'Antigua y Barbuda', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bahrein', 'Bangladesh', 'Barbados', 'Belarús', 'Belice', 'Benin', 'Bhután', 'Bolivia', 'Bosnia y Herzegovina', 'Botswana', 'Brasil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bélgica', 'Cabo Verde', 'Camboya', 'Camerún',
        'Canadá','Chad', 'Chequia', 'Chile', 'China', 'Chipre', 'Colombia', 'Comoras', 'Congo', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Djibouti', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos de América', 'Estonia', 'Eswatini', 'Etiopía', 'Federación de Rusia', 'Fiji', 'Filipinas', 'Finlandia', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guinea', 'Guinea Ecuatorial', 'Guinea-Bissau', 'Guyana', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Iraq',
        'Irlanda', 'Irán', 'Islandia', 'Islas Cook', 'Islas Feroe', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajstán', 'Kenya', 'Kirguistán', 'Kiribati', 'Kuwait', 'Lesotho', 'Letonia', 'Liberia', 'Libia', 'Lituania', 'Luxemburgo', 'Líbano', 'Macedonia del Norte', 'Madagascar', 'MalasiaMalasia', 'Malawi', 'Maldivas', 'Malta', 'Malí', 'Marruecos', 'Mauricio', 'Mauritania', 'Micronesia', 'Mongolia', 'Montenegro', 'Mozambique', 'Myanmar',
        'México', 'Mónaco', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Nigeria', 'Niue', 'Noruega', 'Nueva Zelandia', 'Níger', 'Omán', 'Pakistán', 'Palau', 'Panamá', 'Papua Nueva Guinea', 'Paraguay', 'Países Bajos', 'Perú', 'Polonia', 'Portugal', 'Qatar', 'Reino Unido de Gran Bretaña e Irlanda del Norte', 'República Centroafricana', 'República Democrática Popular Lao', 'República Democrática del Congo', 'República Dominicana', 'República Popular Democrática de Corea', 'República Unida de Tanzanía', 'República de Corea', 'República de Moldova', 'República Árabe Siria', 'Rumania', 'Rwanda', 'Saint Kitts y NevisSaint', 'Samoa', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Somalia',
        'Sri Lanka', 'Sudáfrica', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Suriname', 'Tailandia', 'Tayikistán', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad y Tabago', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Túnez', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Yemen', 'Zambia', 'Zimbabwe'
    ]
}


r = requests.post('http://127.0.0.1:5000/paises', json = paisesData)




