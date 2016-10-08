# 500 halloween hackathonの制作物

# /apiのリクエスト(JSON Format)
| key | value(Type) | remarks | example |
|:--:|:--:|:--:|:--:|
| msg | String | tweet内容 | "hello, halloween" |
| delay_time | String | 遅延が予想される時間 | "10m" |  
| contents | String | Youtube動画であるかスライドショーであるか | "movie", "anime", "news" |  
| id | String | 独自アカウントのID | "tekitou_ni_kimeta_id" |  


# /api/user_dataのレスポンス(JSON Format)  
| key | value(Type) | remarks |  
|:--:|:--:|:--:|
| comment | String | テスト用 |  
| contents_url | String | Youtube動画用 |  


# /api/checkのレスポンス(JSON Format)  
ユーザが今無駄な時間を過ごしているかどうかのAPI  
| key | value(Type) | remarks |  example |
|:--:|:--:|:--:|:--:|
| check | Bool | テスト用 | true,false |  

## curlでAPIをテストする際の例  

```
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"id":"tekitou","msg":"hello, halloweeen","contents":"movie","delay_time":"10m"}'   http://172.24.245.214:8080/api
```
