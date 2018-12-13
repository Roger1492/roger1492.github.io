## 数学 -三角函数基本知识点

> 在开发中经常要用到三角函数的知识，每次需要时也是还现查。虽然是高中数学知识，但是已经忘了不少。现在重新学习一下，并作个记录。本篇文章涉及的内容并不深，只是编程所需要的简单知识。

## 几个注意点：

> 1，Math.sin(x)，Math.cos(x)，Math.tan(x)中的 `x` 是以弧度为单位的。  
> 2，π=180°=Math.PI


## 什么是弧度

**定义：**  
弧度为圆弧长度等于半径时的圆心角度数。一个完整的圆的弧度是 `2π`。  

所以，  
`2π rad = 360°`， `1π rad = 180°`，  
`1° = π/180 rad`， `1 rad = 180°/π`（约等于57.2957°），  
![弧度单位](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Radian_cropped_color.svg/220px-Radian_cropped_color.svg.png)

**弧度转换：**  
以度数表示的角度，把数字乘以 `π/180°`就可以转换为弧度。  
![弧度rad](https://wikimedia.org/api/rest_v1/media/math/render/svg/4dd3a887f7b05b298cdb9641b421f3c250fe7f56)

以弧度表示的角度，乘以 `180/π` 就可以转换为度数。  
![度数deg](https://wikimedia.org/api/rest_v1/media/math/render/svg/ebbd21a7f199ff4c78bcc86a6b1aed028a05db8c)

**角度转换表：**  
| 角度单位  | 值   | 值   | 值   | 值   | 值   | 值   | 值   | 值   |
| --------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 转        | 0    | 1/12 | 1/8  | 1/6  | 1/4  | 1/2  | 3/4  | 1    |
| 角度(deg) | 0°   | 30°  | 45°  | 60°  | 90°  | 180° | 270° | 360° |
| 弧度(rad) | 0    | π/6  | π/4  | π/3  | π/2  | π    | 3π/2 | 2π   |

## 三角函数

常见的三角函数包括：正弦函数(sin)，余弦函数(cos)，正切函数(tan)。对于我们写代码来说，这就是用到的最深的数学知识了。

![a, b, h分别为角A的对边、邻边和斜边](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Trigonometry_triangle_sim.png/150px-Trigonometry_triangle_sim.png)

在直角三角函数中给定一个锐角θ，可以作一个直角三角形，使其中一个内角是θ。  
θ的正弦是对边与斜边的比值：
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cf5bfeb4b47ef6dd9ab3d52d78feec4df1379d4)  
θ的余弦是邻边与斜边的比值：
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/83ee74c3794bc55cd2a21ead8fb6eecd7709fba2)  
θ的正切是对边与邻边的比值： 
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/7886046fb92ce3fe08046c76052445c431f18289)