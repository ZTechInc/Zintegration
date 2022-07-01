try{
    Intent intent = new Intent(Intent.ACTION_MAIN);
    intent.addCategory(Intent.CATEGORY_LAUNCHER);
    intent.setPackage(packageName);
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    intent.setClassName(packageName, className);
    intent.setAction(Intent.ACTION_SEND);
    startActivity(intent);
}
catch (Exception e){
    Intent intent = new Intent(Intent.ACTION_VIEW);
    intent.setData(Uri.parse("market://details?id=" + packageName));
    startActivity(intent);
}