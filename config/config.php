<?php
	error_reporting(0);
	ob_start();
	session_start();  //�򿪻Ự
	$dblink=@mysql_connect("localhost:3308","root","123"); //mysql����,�û���,����
	if($dblink==null)
	{
		echo "���ݿ��ʧ��";
		exit;
	} //������ݿ��޷���������ʾ
	mysql_query("SET NAMES 'utf8'");  //mysql �ַ���
	mysql_select_db("shopping"); //ѡ�����ݿ�
?>
