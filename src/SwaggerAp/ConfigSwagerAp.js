const config = {
    "swagger": "2.0",
    "info": {
        "description" : "API Document By Swagger. จัดทำหน้านี้ขึ้นเพื่อรวบรวม API ที่ใช้บนเว็บไซต์นี้",
        "title": "Swagger Numerical Method"
    },
    "host": "my-json-server.typicode.com/Kingkubkub/NumerWebkub",
    
    "paths":{
        "/root_of_eqution":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Root of Equation", 
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/root_of_eqution/{ExampleId}":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ระบุหมายเลขโจทย์ในเรื่อง Root of Equation",
                "parameters": [
                    {
                        "name": "ExampleId",
                        "in": "path",
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่างที่จะค้นหา",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/matrix":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Matrix",
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        },
        "/matrix/{ExampleId}":{
            "get":{
                "tags":[
                    "API"
                ],
                "summary": "ระบุหมายเลขโจทย์ในเรื่อง Matrix",
                "parameters": [
                    {
                        "name": "ExampleId",
                        "in": "path",
                        "description": "หมายเลขไอดีของโจทย์ตัวอย่าง",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "200": {
                        "description" : "ทำงานสำเร็จ"
                    },
                    "404":{
                        "description" : "ไม่พบโจทย์"
                    }
                }
            }
        }
    }
}

export { config }