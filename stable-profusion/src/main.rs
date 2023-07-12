use web_view::*;
use serde_json::Value;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let html_template = include_str!("../assets/index.html");
    let html_template1 = include_str!("../assets/index1.html");
    let html_with_textbox = format!(
        "{}<br><input type=\"text\" id=\"input\" style=\"width: 1290px; height: 40px; font-size: 1.25em;\">",

        html_template
    );

    let dark_css = r#"
      <style>
         body.dark-mode {
            background-color: #111;
            color: #fff;
         }
         body.dark-mode a {
            color: #fff;
         }
         body.dark-mode .separator {
            color: #999;
         }
         body.dark-mode .versions {
            color: #ff9800;
         }
         /* Specific dark mode styles for iframe */
         #ssb-container.dark-mode iframe {
            filter: invert(1);
         }
         table {
            border-collapse: collapse;
         }
         table td {
            padding: 2px;
         }
         input[type="text"] {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 5px;
         }
         button {
            background-color: #444;
            color: #fff;
            border: none;
            padding: 2px 2px;
            cursor: pointer;
         }
         textarea {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 2px;
            resize: none;
            font-size: 1.0em;
            width: 100%;
         }
         .ssb-wrapper {
            transform: scale(.99);
            position: relative; /* Set the position of the wrapper to relative */
            margin-bottom: 10px;
            margin-left: 1px;
            margin-right: 1px;
            margin-top: 10px;
         }
      </style>
    "#;

    let html_with_dark_theme = format!("{}{}", dark_css, html_with_textbox);

    let webview1 = web_view::builder()
        .title("Stable-Profusion:I")
        .content(Content::Html(&html_with_dark_theme))
        .size(1360, 768)
        .resizable(true)
        .debug(true)
        .user_data(())
        .invoke_handler(|_webview, _arg| Ok(()))
        .build()?;

    let webview2 = web_view::builder()
        .title("Stable-Profusion:II")
        .content(Content::Html(&format!("{}{}", dark_css, html_template1)))
        .size(800, 600)
        .resizable(true)
        .debug(true)
        .user_data(())
        .invoke_handler(|webview, arg| {
            if let Ok(args) = serde_json::from_str::<Vec<Value>>(arg) {
                if let (Some(function_name), Some(url)) = (
                    args.get(0).and_then(Value::as_str),
                    args.get(1).and_then(Value::as_str),
                ) {
                    if function_name == "Web" {
                        // Execute JavaScript to update the URL in the web view
                        webview.eval(&format!("window.location.href = '{}';", url))?;
                    }
                }
            }
            Ok(())
        })
        .build()
        .unwrap();

    webview1.run()?;
    webview2.run()?;

    Ok(())
}
