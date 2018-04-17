Gitlab Changelog Generator
==================

Generate gitlab release changlog

## Output example

> ## [Release v1.2.0](https://github.com/ro1963855/gitlab-changelog-generator) (2018-04-17)
> [Full Changelog](http://172.20.1.212:8888/root/iDesign/compare/6326553e10385d2c277f481eb327d2e45d3d140f...0796744fb9594f14e8692143800facc148c6ed94)
>
> **New feature**
> - Sync Git and Svn files lost between move [#1](http://172.20.1.212:8888/root/iDesign/issues/1) ([root](http://172.20.1.212:8888/root))
>
> **Fixed bugs**
> - fix default sort will not work when change page [#7](http://172.20.1.212:8888/root/iDesign/issues/7) ([Dandy.Chen](http://172.20.1.212:8888/Dandy.Chen))
> - fix inherit PCB Part No page get default value from PLM logic error [#6](http://172.20.1.212:8888/root/iDesign/issues/6) ([Dandy.Chen](http://172.20.1.212:8888/Dandy.Chen))
> - Fix DocumentFrameView not working caused by CAE_Gridview library modification [#5](http://172.20.1.212:8888/root/iDesign/issues/5) ([Ji.Li](http://172.20.1.212:8888/Ji.Li))
> - Fix Request's step after step3, but handlform is not exist bug [#4](http://172.20.1.212:8888/root/iDesign/issues/4) ([Dandy.Chen](http://172.20.1.212:8888/Dandy.Chen))

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
            "selected": 9
        },
        "changelog": {
            "labelTitle": [
                {
                    "label": "Feature",
                    "indicate": "New feature"
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
