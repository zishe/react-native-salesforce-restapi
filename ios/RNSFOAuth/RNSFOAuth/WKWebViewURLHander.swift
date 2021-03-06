//
//  OAuthURLHandler.swift
//  Pods
//
//  Created by Yuri Sanikov on 1/11/17.
//
//

import Foundation
import WebKit

public class WKWebViewURLHander : UINavigationController, OAuthSwiftURLHandlerType, WKNavigationDelegate {
    
    override public func viewDidLoad() {
        super.viewDidLoad()
    }
    
    public func handle(_ url: URL) {

        OAuthSwift.main { [unowned self] in
            let ctl = WKWebViewController()
            ctl.targetURL = url
            ctl.title = "Login"
            self.pushViewController(ctl, animated: true)

            UIApplication.topViewController?.present(self, animated: true, completion: {
            })
        }
    }

}

public class WKWebViewController : OAuthWebViewController, WKNavigationDelegate {

    var targetURL : URL?
    var webView : WKWebView!
    var indicator: UIActivityIndicatorView!
    
    override public func viewDidLoad() {
        super.viewDidLoad()
        
        let closeButton = UIBarButtonItem(title: "Cancel", style: UIBarButtonItemStyle.plain, target: self, action: #selector(closeTapped))
        navigationItem.leftBarButtonItem = closeButton

        
        let config = WKWebViewConfiguration();
        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.navigationDelegate = self
        webView.load(URLRequest(url: targetURL!))
        
        indicator = UIActivityIndicatorView()
        indicator.hidesWhenStopped = true;
        indicator.center = view.center;
        indicator.activityIndicatorViewStyle = .gray
        
        view.addSubview(webView)
        view.addSubview(indicator)
        
        webView.addObserver(self, forKeyPath:  #keyPath(WKWebView.loading), options: .new, context: nil)
    }
    
    deinit {
        webView.removeObserver(self, forKeyPath: #keyPath(WKWebView.loading))
    }
    
    public override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        guard let keyPath = keyPath else { return }
        guard let change = change else { return }
        switch keyPath {
        case #keyPath(WKWebView.loading):
            let val = self.webView.isLoading
            UIApplication.shared.isNetworkActivityIndicatorVisible = val
            if val {
                indicator.startAnimating()
            } else {
                indicator.stopAnimating()
            }
            break;
            
            default:break
        }
    }
    override public func handle(_ url: URL) {
        targetURL = url
        super.handle(url)
    }
    
    public func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        
        if let url = navigationAction.request.url, url.scheme == "oauth-swift" {
            decisionHandler(WKNavigationActionPolicy.cancel)
            OAuthSwift.handle(url: url)
            UIApplication.topViewController?.dismiss(animated: true, completion: nil)
        } else {
            decisionHandler(WKNavigationActionPolicy.allow)
        }
    }

    func closeTapped() {
        OAuthSwift.handle(url: URL(string: "oauth-swift://oauth-callback/cancelled?error=cancelled")!)
        UIApplication.topViewController?.dismiss(animated: true, completion: nil)
    }

}
