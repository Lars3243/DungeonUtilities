xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a" : 1,
                    "b" : 2
                })
                .beforeInvoke([
                    {
                        "desc" : "Busy",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "busy"
                    }
                ])
                .onData([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
                .onError([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("70em")
                .setHeight("88.38095238095238em")
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group12")
                .setLeft("15em")
                .setTop("68.57142857142857em")
                .setWidth("53.333333333333336em")
                .setHeight("15.833333333333334em")
                .setOverflow("hidden")
                .setCaption("Pages")
                .setToggleBtn(false)
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane18")
                .setLeft("9.166666666666666em")
                .setTop("0.3333333333333333em")
                .setWidth("28.166666666666668em")
                .setHeight("13.5em")
                .setCustomStyle({
                    "KEY" : {
                        "border" : "dashed #483D8B 1px",
                        "border-radius" : "4px 4px 4px 4px"
                    }
                })
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton108")
                .setDesc("Show Page")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Show Page")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "args" : [
                            "{page.ctl_pane18}",
                            null
                        ],
                        "method" : "show",
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton43")
                .setDesc("Hide Page")
                .setLeft("38.333333333333336em")
                .setTop("1.6666666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Hide Page")
                .onClick([
                    {
                        "desc" : "Hide page",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [ ],
                        "method" : "hide"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton44")
                .setDesc("Destroy Page")
                .setLeft("38.333333333333336em")
                .setTop("5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Destroy Page")
                .onClick([
                    {
                        "desc" : "Destroy",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [ ],
                        "method" : "destroy"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton45")
                .setDesc("Fill Data")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Fill Data")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [
                            "[data]data/data.json"
                        ],
                        "method" : "setData"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton47")
                .setDesc("Switch to  another Page")
                .setLeft("46.666666666666664em")
                .setTop("0.8333333333333334em")
                .setWidth("6.166666666666667em")
                .setHeight("12.5em")
                .setCaption("&gt;&gt; <br><br>Switch to<div><br></div><div>another</div><div><br></div><div>Page</div>")
                .onClick([
                    {
                        "desc" : "动作1",
                        "type" : "page",
                        "target" : "App.XUIPage2",
                        "params" : [true],
                        "method" : "switch"
                    }
                ])
            );
            
            host.ctl_group12.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton1367")
                .setDesc("Fill Profiles")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("7.5em")
                .setHeight("2.5em")
                .setCaption("Fill Profiles")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "page",
                        "target" : "App.XUISubPage",
                        "params" : [
                            "[data]data/prfs.json"
                        ],
                        "method" : "setProfile"
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Group")
                .setHost(host,"ctl_group21")
                .setLeft("1.6666666666666667em")
                .setTop("68.57142857142857em")
                .setWidth("11.666666666666666em")
                .setHeight("15.833333333333334em")
                .setCaption("Others")
                .setToggleBtn(false)
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton180")
                .setDesc("RPC Call")
                .setLeft("0.8333333333333334em")
                .setTop("0.8333333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("RPC Call")
                .onClick([
                    {
                        "desc" : "action",
                        "type" : "control",
                        "target" : "api_1",
                        "params" : [ ],
                        "method" : "invoke",
                        "onOK" : 0,
                        "onKO" : 1
                    },
                    {
                        "desc" : "Adjust Data",
                        "type" : "other",
                        "target" : "var",
                        "params" : [
                            "okData2",
                            "{temp.okData}"
                        ],
                        "method" : "temp",
                        "adjust" : "stringify"
                    },
                    {
                        "desc" : "Show result",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "OK",
                            "{temp.okData2}"
                        ],
                        "method" : "pop"
                    }
                ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton125")
                .setDesc("Conditions")
                .setLeft("0.8333333333333334em")
                .setTop("4.166666666666667em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Conditions")
                .onClick([
                    {
                        "desc" : "=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : "=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "!=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2!=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : "!=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : ">",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2>1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : ">",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "<",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1<2"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : "<",
                                "right" : "2"
                            }
                        ]
                    },
                    {
                        "desc" : "<=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "2<=3"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "2",
                                "symbol" : "<=",
                                "right" : "3"
                            }
                        ]
                    },
                    {
                        "desc" : ">=",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "1>=1"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "1",
                                "symbol" : ">=",
                                "right" : "1"
                            }
                        ]
                    },
                    {
                        "desc" : "contains",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa bb cc' contains 'bb'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa bb cc",
                                "symbol" : "include",
                                "right" : "bb"
                            }
                        ]
                    },
                    {
                        "desc" : "doesn't contain",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' doesn't contain 'bb'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "exclude",
                                "right" : "bb"
                            }
                        ]
                    },
                    {
                        "desc" : "start with",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' starts with 'aa'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "start",
                                "right" : "aa"
                            }
                        ]
                    },
                    {
                        "desc" : "end with",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "'aa dd cc' ends with 'cc'"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "aa dd cc",
                                "symbol" : "end",
                                "right" : "cc"
                            }
                        ]
                    }
                ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton210")
                .setDesc("Keyborad Event")
                .setLeft("0.8333333333333334em")
                .setTop("7.5em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Keyborad Event")
                .onHotKeydown([
                    {
                        "desc" : "action1",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "Key:{args.1.key}<br/>\nCtrl:{args.1.ctrlKey}<br/>\nShift:{args.1.shiftKey}<br/>\nAlt:{args.1.altKey}",
                            "Keyboard Event",
                            200,
                            5000
                        ],
                        "method" : "message",
                        "conditions" : [
                            {
                                "left" : "",
                                "symbol" : "=",
                                "right" : ""
                            }
                        ],
                        "event" : 2
                    }
                ])
                .onClick([ ])
            );
            
            host.ctl_group21.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"ctl_htmlbutton209")
                .setDesc("Mouse Event")
                .setLeft("0.8333333333333334em")
                .setTop("10.833333333333334em")
                .setWidth("9.166666666666666em")
                .setHeight("2.5em")
                .setCaption("Mouse Event")
                .onClick([
                    {
                        "desc" : "Mouse",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [
                            "Mouse Event",
                            "button:{args.1.button}<br/>\npageX:{args.1.pageX}<br/>\npageY:{args.1.pageY}<br/>\n\n<br/><br/>\nCtrl:{args.1.ctrlKey}<br/>\nshiftKey:{args.1.shiftKey}<br/>\nAltKey:{args.1.AltKey}"
                        ],
                        "method" : "pop",
                        "conditions" : [
                            {
                                "left" : "",
                                "symbol" : "=",
                                "right" : ""
                            }
                        ],
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("4.571428571428571em")
                .setTop("4.571428571428571em")
                .setWidth("8.304761904761905em")
                .setHeight("3.580952380952381em")
                .setCaption("Add")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_treegrid6",
                        "args" : [
                            "{page.xui_ui_treegrid6.setUIValue()}",
                            undefined,
                            undefined,
                            "{args[3].}"
                        ],
                        "method" : "setUIValue",
                        "conditions" : [
                            {
                                "left" : "{page.xui_ui_input7}",
                                "symbol" : "include",
                                "right" : "{args[3].}"
                            }
                        ],
                        "redirection" : "other:callback:call",
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_pane39.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block7")
                .setLeft("39.61904761904762em")
                .setTop("0em")
                .setWidth("21.409523809523808em")
                .setHeight("29.02857142857143em")
            );
            
            host.xui_ui_block7.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid6")
                .setDock("center")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("21.79047619047619em")
                .setHeight("28.571428571428573em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "caption" : "Characters",
                        "type" : "input",
                        "width" : "8em"
                    },
                    {
                        "id" : "col2",
                        "caption" : "Initiative",
                        "type" : "input",
                        "width" : "8em"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "C1"
                            },
                            {
                                "value" : "D1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "C2"
                            },
                            {
                                "value" : "D2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : ""
                            },
                            {
                                "value" : ""
                            },
                            {
                                "value" : "C3"
                            },
                            {
                                "value" : "D3"
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    {
                                        "value" : "A4"
                                    },
                                    {
                                        "value" : "B4"
                                    },
                                    {
                                        "value" : "C4"
                                    },
                                    {
                                        "value" : "D4"
                                    }
                                ]
                            }
                        ],
                        "open" : false
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("7.619047619047619em")
                .setTop("14.476190476190476em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Player")
                .setValue("asdd")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});
