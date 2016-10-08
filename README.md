# 500 halloween hackathonの制作物

# /apiのレスポンス(JSON Format)  
| key | value(Type) | remarks |  
|:--:|:--:|:--:|
| comment | String | テスト用 |  
| contents_url | String | Youtube動画用 |  

## curlでAPIをテストする際の例  

```
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"id":"tekitou","msg":"hello, halloweeen","contents":"movie","delay_time":"10m"}'   http://172.24.245.214:8080/api
```
