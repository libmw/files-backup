# 文件定时备份

定时备份文件数据到指定的文件夹中。可以配置备份时间等。

## 前置条件

在该项目的根目录建立.env文件，并写入以下配置：

```
#本地存放备份文件的目录地址
BACKUP_PATH="./files/"
#远程路径
REMOTE_PATH="user@172.172.172.172:/files/*"
IDENTIFY_PATH="~/.ssh/id_rsa"
#备份脚本运行时间，格式为cron表达式
RUN_TIME="0 0 1 * * *"
```

## 安装
```bash
npm install
```

## 运行

建议使用pm2来运行该脚本，因为该脚本需要在后台常驻运行。

如果还没有pm2，请先全局安装：

```javascript
npm install pm2 -g
```

安装后执行：

```javascript
pm2 start index.js --name files_backup
```

检测是否执行成功：
```javascript
pm2 list
```
如果status为online则执行成功


## cron表达式文档

参考<http://crontab.org/>