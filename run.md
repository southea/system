### 1.配置jdk8
搜csdn配置  

### 2.下载图数据库neo4j  
文件名：neo4j-community-3.5.9-windows.zip  
下载完之后，解压，添加环境变量：  
添加系统变量：  
变量名：NEO4J_HOME  
路径：（换成自己的）D:\neo4j\neo4j 3.5.9 community\neo4j-community-3.5.9  
在系统变量的Path中新建：%NEO4J_HOME%\bin  
修改neo_db目录下的配置文件config.py,设置图数据库的账号和密码。  
运行：  
cmd中，cd到文件夹：D:\neo4j\neo4j 3.5.9 community\neo4j-community-3.5.9\bin  
启动：neo4j.bat console  
neo4j初始密码和账号都为neo4j  
到时候关闭：ctrl+c  

### 3.终端：cd neo_db  
打开虚拟环境：venv/Scripts/activate
退出虚拟环境：deactivate，只能在虚拟环境中跑系统跑代码  
然后运行python create_graph.py建立知识图谱
### 4.Itp模型下载，在KGQA目录下，修改ltp.py里的ltp模型文件的搭建目录
### 5.运行python app.py，浏览器打开localhost:5000即可查看
结束运行也是ctrl+c
