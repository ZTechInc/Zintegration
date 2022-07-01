@objc func tapMobileAccess(sender:UITapGestureRecognizer) {
      guard let url = URL(string: "ZervLife://zerv.com?phonenumber=919966888636&customerid=zervdev") else{
           return
      }
      if(UIApplication.shared.canOpenURL(url)){
          // deeplinking
          UIApplication.shared.open(url, options: [:], completionHandler:nil)
      }else{
          //upcell
          let vc = SKStoreProductViewController()
          vc.loadProduct(withParameters: [SKStoreProductParameterITunesItemIdentifier: NSNumber(1543327463)], completionBlock: nil)
              present(vc, animated: true, completion: nil)
      }
}