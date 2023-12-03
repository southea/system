import json

# 上述数据
data = {
  "United States": {
    "Artificial intelligence": 687,
    "Operating system": 382,
    "Statistics": 252,
    "Programming language": 237,
    "Computer network": 236,
    "The Internet": 236,
    "Machine learning": 225,
    "Algorithm": 170,
    "Computer vision": 160,
    "Database": 47
  },
  "Canada": {
    "Artificial intelligence": 50,
    "Statistics": 26,
    "Computer network": 21,
    "Machine learning": 20,
    "Operating system": 19,
    "The Internet": 17,
    "Computer vision": 11,
    "Algorithm": 9,
    "Programming language": 9,
    "Telecommunications": 7
  },
  "United Kingdom": {
    "Artificial intelligence": 84,
    "Machine learning": 40,
    "Statistics": 39,
    "Computer vision": 22,
    "Programming language": 20,
    "Operating system": 18,
    "The Internet": 17,
    "Computer network": 14,
    "Algorithm": 12,
    "Law": 6
  },
  "Spain": {
    "Artificial intelligence": 17,
    "Operating system": 8,
    "Statistics": 7,
    "The Internet": 7,
    "Machine learning": 6,
    "Computer network": 2,
    "Software": 2,
    "Programming language": 2,
    "Cognitive science": 1,
    "Social psychology": 1
  },
  "Germany": {
    "Artificial intelligence": 60,
    "Operating system": 23,
    "Computer vision": 21,
    "Machine learning": 21,
    "Programming language": 18,
    "The Internet": 15,
    "Statistics": 15,
    "Algorithm": 10,
    "Computer network": 7,
    "Software": 7
  },
  "Australia": {
    "Artificial intelligence": 45,
    "Machine learning": 22,
    "Statistics": 18,
    "The Internet": 11,
    "Operating system": 9,
    "Computer vision": 9,
    "Algorithm": 7,
    "Computer network": 7,
    "Programming language": 6,
    "Software": 3
  },
  "China": {
    "Artificial intelligence": 163,
    "Machine learning": 99,
    "Statistics": 63,
    "Computer vision": 52,
    "Computer network": 38,
    "Operating system": 31,
    "The Internet": 27,
    "Algorithm": 18,
    "无研究领域": 15,
    "Mathematical optimization": 8
  },
  "France": {
    "Artificial intelligence": 20,
    "Statistics": 13,
    "Computer vision": 11,
    "Machine learning": 7,
    "Programming language": 4,
    "Computer network": 4,
    "Telecommunications": 4,
    "Operating system": 4,
    "Geometry": 2,
    "The Internet": 2
  },
  "Switzerland": {
    "Artificial intelligence": 34,
    "Operating system": 18,
    "Machine learning": 14,
    "Computer network": 13,
    "Computer vision": 13,
    "The Internet": 10,
    "Programming language": 10,
    "Statistics": 9,
    "Algorithm": 4,
    "Electrical engineering": 4
  },
  "United Arab Emirates": {
    "Computer network": 2,
    "Artificial intelligence": 2,
    "Telecommunications": 1,
    "Electrical engineering": 1,
    "The Internet": 1,
    "Computer vision": 1,
    "Machine learning": 1
  },
  "Singapore": {
    "Artificial intelligence": 25,
    "Machine learning": 15,
    "Statistics": 11,
    "Computer network": 6,
    "The Internet": 6,
    "Operating system": 5,
    "Computer vision": 4,
    "Database": 3,
    "Programming language": 3,
    "Mathematical optimization": 2
  },
  "Sweden": {
    "Artificial intelligence": 5,
    "Statistics": 3,
    "Computer network": 2,
    "The Internet": 2,
    "Operating system": 2,
    "Software": 2,
    "Software engineering": 2,
    "Machine learning": 2,
    "Electrical engineering": 1,
    "Software development": 1
  },
  "Poland": {
    "Artificial intelligence": 4,
    "Statistics": 2,
    "Machine learning": 2,
    "Algorithm": 1,
    "Computer network": 1,
    "Operating system": 1,
    "Programming language": 1
  },
  "Israel": {
    "Artificial intelligence": 22,
    "Algorithm": 13,
    "Statistics": 10,
    "Algebra": 9,
    "Computer vision": 8,
    "Machine learning": 7,
    "Cryptography": 6,
    "Computer network": 6,
    "Combinatorics": 5,
    "Programming language": 5
  },
  "Belgium": {
    "Artificial intelligence": 15,
    "Statistics": 10,
    "Operating system": 7,
    "Machine learning": 6,
    "Cryptography": 5,
    "Algorithm": 4,
    "Programming language": 3,
    "Algebra": 3,
    "The Internet": 2,
    "Computer vision": 2
  },
  "Netherlands": {
    "Artificial intelligence": 15,
    "Machine learning": 7,
    "Statistics": 6,
    "Programming language": 5,
    "Computer vision": 3,
    "Algorithm": 3,
    "Operating system": 3,
    "Internal medicine": 3,
    "Radiology": 2,
    "Computer network": 2
  },
  "Austria": {
    "Artificial intelligence": 10,
    "Algorithm": 5,
    "Operating system": 4,
    "Programming language": 3,
    "Computer vision": 3,
    "Electroencephalography": 2,
    "Neuroscience": 2,
    "Machine learning": 2,
    "The Internet": 2,
    "Geometry": 1
  },
  "Taiwan": {
    "Artificial intelligence": 10,
    "Operating system": 5,
    "Computer network": 4,
    "Machine learning": 3,
    "Statistics": 2,
    "Algorithm": 2,
    "The Internet": 2,
    "Law": 1,
    "Educational technology": 1,
    "Computer vision": 1
  },
  "Japan": {
    "Artificial intelligence": 16,
    "Operating system": 6,
    "Statistics": 5,
    "Machine learning": 4,
    "Robot": 3,
    "Computer network": 3,
    "The Internet": 3,
    "Computer vision": 2,
    "Speech recognition": 2,
    "Programming language": 2
  },
  "Hungary": {
    "Combinatorics": 2,
    "Discrete mathematics": 2,
    "Algebra": 1,
    "Graph theory": 1
  },
  "Italy": {
    "Artificial intelligence": 25,
    "Operating system": 12,
    "Programming language": 11,
    "Statistics": 6,
    "The Internet": 6,
    "Software": 6,
    "Machine learning": 6,
    "Database": 5,
    "Algorithm": 5,
    "Computer vision": 3
  },
  "India": {
    "Artificial intelligence": 10,
    "Statistics": 6,
    "Machine learning": 5,
    "Computer network": 4,
    "Operating system": 4,
    "The Internet": 2,
    "Database": 1,
    "Mathematical optimization": 1,
    "Algebra": 1,
    "Internal medicine": 1
  },
  "Iceland": {
    "Artificial intelligence": 1,
    "Machine learning": 1,
    "Statistics": 1
  },
  "Denmark": {
    "Algorithm": 3,
    "Computer network": 3,
    "Telecommunications": 3,
    "Statistics": 3,
    "Operating system": 2,
    "Artificial intelligence": 2,
    "Programming language": 2,
    "Combinatorics": 2,
    "Database": 1,
    "Cryptography": 1
  },
  "Mexico": {
    "Artificial intelligence": 3,
    "Machine learning": 2,
    "Mathematical optimization": 1,
    "Algorithm": 1,
    "Statistics": 1,
    "Artificial neural network": 1
  },
  "Finland": {
    "Artificial intelligence": 13,
    "Statistics": 8,
    "Machine learning": 6,
    "Computer network": 4,
    "Algorithm": 4,
    "Computer vision": 2,
    "Programming language": 2,
    "Operating system": 2,
    "The Internet": 2,
    "Pattern recognition": 1
  },
  "Brazil": {
    "Computer network": 2,
    "The Internet": 2,
    "Artificial intelligence": 1,
    "Operating system": 1
  },
  "Czech Republic": {
    "Artificial intelligence": 2,
    "Computer vision": 2,
    "Statistics": 1,
    "Machine learning": 1
  },
  "Saudi Arabia": {
    "Artificial intelligence": 5,
    "The Internet": 2,
    "Computer network": 2,
    "Mathematical analysis": 1,
    "Algorithm": 1,
    "Statistics": 1,
    "Machine learning": 1,
    "Optics": 1,
    "Computer vision": 1
  },
  "Greece": {
    "Artificial intelligence": 7,
    "Machine learning": 3,
    "Computer vision": 2,
    "Programming language": 2,
    "Database": 2,
    "Data mining": 1,
    "Computer network": 1,
    "Operating system": 1,
    "Internal medicine": 1,
    "Quantum mechanics": 1
  },
  "Qatar": {
    "Artificial intelligence": 4,
    "Control theory": 1,
    "Quantum mechanics": 1,
    "Database": 1,
    "Operating system": 1,
    "The Internet": 1,
    "World Wide Web": 1,
    "Natural language processing": 1,
    "Programming language": 1
  },
  "Ireland": {
    "Artificial intelligence": 6,
    "Computer vision": 3,
    "The Internet": 3,
    "Quantum mechanics": 1,
    "World Wide Web": 1,
    "Pixel": 1,
    "Database": 1,
    "Machine learning": 1,
    "Statistics": 1
  },
  "New Zealand": {
    "Artificial intelligence": 3,
    "Machine learning": 3,
    "Operating system": 1,
    "Artificial neural network": 1,
    "Statistics": 1
  },
  "Estonia": {
    "Programming language": 1,
    "Artificial intelligence": 1,
    "Database": 1
  },
  "Chile": {
    "Algorithm": 1,
    "Artificial intelligence": 1,
    "Programming language": 1
  },
  "Republic of Korea": {
    "Artificial intelligence": 4,
    "Computer vision": 3,
    "Machine learning": 2,
    "Statistics": 2,
    "Computer network": 2,
    "Telecommunications": 2
  },
  "Egypt": {
    "Artificial intelligence": 2,
    "Machine learning": 1,
    "Statistics": 1,
    "Computer network": 1,
    "The Internet": 1
  },
  "Portugal": {
    "Artificial intelligence": 3,
    "Statistics": 3,
    "Machine learning": 2,
    "Algorithm": 1
  },
  "Norway": {
    "Algorithm": 1,
    "Combinatorics": 1,
    "Discrete mathematics": 1
  },
  "Pakistan": {
    "Computer network": 1,
    "The Internet": 1,
    "Operating system": 1
  },
  "Romania": {
    "Programming language": 1,
    "Artificial intelligence": 1,
    "Algorithm": 1
  },
  "Luxembourg": {
    "Artificial intelligence": 1,
    "Programming language": 1,
    "Epistemology": 1
  },
  "Malaysia": {
    "Computer network": 1,
    "Operating system": 1,
    "The Internet": 1,
    "Artificial intelligence": 1,
    "Law": 1,
    "Mathematical optimization": 1
  },
  "South Africa": {
    "Artificial intelligence": 2,
    "Machine learning": 1,
    "Mathematical optimization": 1,
    "Computer network": 1,
    "Operating system": 1
  },
  "Turkey": {
    "Telecommunications": 1,
    "Computer network": 1,
    "Statistics": 1
  },
  "Jordan": {
    "Computer network": 1,
    "Operating system": 1,
    "The Internet": 1
  },
  "Cyprus": {
    "Artificial intelligence": 1,
    "Operating system": 1,
    "Database": 1
  }
}

# 创建大洲分类的空字典
continents_data = {
    "North America": {},
    "Europe": {},
    "Asia": {},
    "Oceania": {},
    "South America": {},
    "Africa": {}
}

# 将每个国家的数据合并至对应大洲
for country, fields in data.items():
    if country in ["United States", "Canada", "Mexico", "Brazil"]:
        for field, value in fields.items():
            continents_data["North America"][field] = continents_data["North America"].get(field, 0) + value
    elif country in ["United Kingdom", "Spain", "Germany", "France", "Switzerland", "Netherlands", "Belgium", "Sweden", "Poland", "Italy", "Iceland", "Denmark", "Finland", "Czech Republic", "Greece", "Portugal", "Norway", "Luxembourg", "Cyprus"]:
        for field, value in fields.items():
            continents_data["Europe"][field] = continents_data["Europe"].get(field, 0) + value
    elif country in ["China", "Japan", "India", "Taiwan", "Korea", "Saudi Arabia", "Qatar"]:
        for field, value in fields.items():
            continents_data["Asia"][field] = continents_data["Asia"].get(field, 0) + value
    elif country in ["Australia", "New Zealand"]:
        for field, value in fields.items():
            continents_data["Oceania"][field] = continents_data["Oceania"].get(field, 0) + value
    elif country in ["Brazil", "Argentina", "Chile"]:
        for field, value in fields.items():
            continents_data["South America"][field] = continents_data["South America"].get(field, 0) + value
    elif country in ["South Africa", "Egypt"]:
        for field, value in fields.items():
            continents_data["Africa"][field] = continents_data["Africa"].get(field, 0) + value

# 获取每个大洲的热门领域top10及对应的数值
top_fields_by_continent = {}
for continent, fields in continents_data.items():
    sorted_fields = sorted(fields.items(), key=lambda x: x[1], reverse=True)[:10]
    top_fields_by_continent[continent] = sorted_fields

print(json.dumps(top_fields_by_continent, indent=2))