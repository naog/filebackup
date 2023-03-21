#安装软件(自己定制)
#installpanel_soft=True
if [[ "${installpanel_soft}" == "True" ]];then
dir=/www/server/panel/install
if [[ -f $dir/install_soft.sh ]];then
cd $dir
#以下是极速安装Nginx1.20 PHP7.4 Mysql5.7
bash $dir/install_soft.sh 1 install nginx 1.21.4
bash $dir/install_soft.sh 1 install php 7.4
bash $dir/install_soft.sh 1 install mysql 5.7.40
bash $dir/install_soft.sh 1 install phpmyadmin 5.0
bash $dir/install_soft.sh 1 install redis 7.0.5
else
echo "没找到$dir/install_soft.sh，是不是没安装宝塔或者有其他错误"
fi
fi
 
bt default
