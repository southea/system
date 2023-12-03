import pandas as pd

# 读取数据集
data = pd.read_csv('hot.csv')

# 创建一个空的字典来存储各个国家的领域数据
country_domains = {}

# 遍历数据集
for index, row in data.iterrows():
    country = row['country']
    domains = row[['最有名研究领域1', '最有名研究领域2', '最有名研究领域3']].tolist()  # 获取该国家的领域数据

    # 统计各个国家的热点领域
    if country in country_domains:
        country_domains[country] += domains
    else:
        country_domains[country] = domains

# 对热点领域进行统计
top_domains_by_country = {}
for country, domains in country_domains.items():
    domain_count = pd.Series(domains).value_counts().sort_values(ascending=False).head(10)  # 统计各个国家的热门领域前十
    top_domains_by_country[country] = domain_count

print(top_domains_by_country)