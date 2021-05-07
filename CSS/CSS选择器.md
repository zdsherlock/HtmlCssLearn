## 选择器的概念
* 用于选择对应的标签，进行样式设置
* CSS2时期class盛行（现状也是），但class通常不具备语义（不理解），CSS3可以将语义和元素绑定起来（一切为了语义，人可以快速看懂）；


****
## 选择器的类型
* 属性选择器
   ```CSS
    [att*=val]
    [att^=val]
    [att$=val]（这个选择器书上说需要加斜杠（\）但编辑器测试结果加了有时候反而有问题）
   ```
* 结构性伪类选择器
   * 基本概念：伪类选择器和伪元素；
      * 常用的伪类选择器
         ```CSS
         :link
         :visited
         :hover
         :active
         ```
         ****
         ```CSS
         :before
         :after
         ```
   * 结构性伪类选择器包括：在使用这些的时候body的范围会有变化
   ```CSS
   :root
   :not(h1)
   :empty
   :target
   :first-child
   :last-child
   :nth-child(及衍生)
   :nth-of-type(及衍生)
   :nth-child(1):nth-last-child(1) == :only-child (不理解)
   ```
   * UI元素状态伪类选择器，CSS3下共17种
   ```CSS
   1.E:hover;
   2.E:active;
   3.E:focus;
   4.E:enabled;
   5.E:disabled;
   6.E:read-only;
   7.E:read-write;
   8.E:checked;
   9.E:selection
   10.E:default (chrome不支持)
   11.E:indeterminate (chrome不支持)
   12.E:invalid
   13.E:vaild
   14.E:required
   15.E:optional
   16.E:in-range
   17.E:out-of-range