# 500 halloween hackathonの制作物

# POST /api/bot のリクエスト(JSON Format)
| key | value(Type) | remarks | example |
|:--:|:--:|:--:|:--:|
| message | String | 内容 | "おはよう"  

# /api/bot のレスポンス(JSON Format)  
| key | value(Type) | remarks |  
|:--:|:--:|:--:|
| message | String | APIから返ってきたmessageそのまま |  

# /api/notification のレスポンス(JSON FORMAT)
| key | value(Type) | remarks |  example |
|:--:|:--:|:--:|:--:|
| kind | String |  | "Face_Charactor","Bot_Chat" |

# 攻撃される側のAPIについて [IP Address]/api/Notiifcation (JSON FORMAT)
| key | value(Type) | remarks | example |
|:--:|:--:|:--:|:--:|
| message | String |  | "Face_Charactor","Bot_Chat"  |  

# curlコマンドの使用例

```
curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"id":"tekitou","msg":"hello, halloweeen","contents":"movie","delay_time":"10m"}'   http://172.24.245.214:5000/api/bot
```
