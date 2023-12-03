### 1.执行执行pip install -r requirement.txt
### 2.安装jdk8
### 3.安装neo4j
### 4..切换到neo_db目录下，执行python create_graph.py建立知识图谱
出现报错：ImportError: cannot import name 'NodeSelector' from 'py2neo'  
解决：将creat_graph.py中的NodeSelector替换成NodeMatcher  
修改config.py中的：  
graph = Graph("http://localhost:7687",
               auth=("neo4j","950302" ))  
python3.8配置：https://blog.csdn.net/bbsyi/article/details/120986086
创建虚拟环境并且指定python版本：  
python -m venv --prompt myenv "C:\path\to\python\executable\python.exe" venv  
进入虚拟环境：  
venv\Scripts\activate  
python目录下：D:\python\Lib\collections\_init_.py   
添加引入模块：  
from collections.abc import Mapping  
from collections.abc import MutableMapping  
from collections.abc import Set  
from collections.abc import Sequence  

pip install D:\软件下载\py2neo-4.1.0.tar.gz  
pip install D:\downloading\mkl_fft-1.0.6-cp36-cp36m-win_amd64.whl 