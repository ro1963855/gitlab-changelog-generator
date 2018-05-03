Gitlab Changelog Generator
==================

Generate gitlab release changlog

## Output example

> ## [Release v1.3.0](http://172.20.1.212:8888/root/iDesign/merge_requests/24) (2018-05-03)
> [Full Changelog](http://172.20.1.212:8888/root/iDesign/compare/8321554fe6a514f3973a4ea71384272359878aeb...64cca9babea9fbd963373a9cc96b0281507db098)
> 
> **New feature**
> - Adjust column position of Resource page and change counting method [#17](http://172.20.1.212:8888/root/iDesign/issues/17) ([Dandy.Chen](http://172.20.1.212:8888/Dandy.Chen))
> 
> **Fixed bugs**
> - Fix RMA Shipping_Month [#18](http://172.20.1.212:8888/root/iDesign/issues/18) ([Josh.Lin](http://172.20.1.212:8888/Josh.Lin))
> - Fix user not receive email problem [#13](http://172.20.1.212:8888/root/iDesign/issues/13) ([Dandy.Chen](http://172.20.1.212:8888/Dandy.Chen))

## Usage
*  download project from git
*  edit `vue\gitlab-changelog-generator\src\assets\config.json`   
Example :

```json
{
    "gitlab": {
        "protocol": "http",                             # http or https
        "host": "192.168.1.1",
        "port": "8080",
        "api": {
            "version": "v4",
            "Private-Token": ""                         # Gitlab's Personal access tokens
        }
    },
    "default": {
        "project": {
            "selected": "Administrator / iDesign"       # Gitlab's group / project
        },
        "changelog": {
            "labelTitle": [
                {
                    "label": "Feature",                 # gitlab issue label
                    "indicate": "New feature"           # markdown show name
                },
                {
                    "label": "BugFix",
                    "indicate": "Fixed bugs"
                }
            ]
        }
    }
}
```

*  run application   

```
    $ npm run dev
```

*  open browser and visit website http://localhost:8080/   

![website page](../master/images/Gitlab_generator_page.png)
