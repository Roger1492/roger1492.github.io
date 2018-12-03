# Emacs 配置文件

以下是 emacs 的配置文件

```lisp
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(display-time-mode t)
 '(global-display-line-numbers-mode t)
 '(package-selected-packages
   (quote
    (xref-js2 js2-refactor js2-mode company-tern emms treemacs tern cnfonts emmet-mode)))
 '(show-paren-mode t)
 '(tool-bar-mode nil)
 '(transient-mark-mode nil))
(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(default ((t (:family "Fira Code" :foundry "outline" :slant normal :weight normal :height 98 :width normal)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;; package ;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 (require 'package)
(let* ((no-ssl (and (memq system-type '(windows-nt ms-dos))
                    (not (gnutls-available-p))))
       (proto (if no-ssl "http" "https")))
  (when no-ssl
    (warn "\
Your version of Emacs does not support SSL connections,
which is unsafe because it allows man-in-the-middle attacks.
There are two things you can do about this warning:
1. Install an Emacs version that does support SSL and be safe.
2. Remove this warning from your init file so you won't see it again."))
  ;; Comment/uncomment these two lines to enable/disable MELPA and MELPA Stable as desired
  (add-to-list 'package-archives (cons "melpa" (concat proto "://melpa.org/packages/")) t)
  ;;(add-to-list 'package-archives (cons "melpa-stable" (concat proto "://stable.melpa.org/packages/")) t)
  (when (< emacs-major-version 24)
    ;; For important compatibility libraries like cl-lib
    (add-to-list 'package-archives (cons "gnu" (concat proto "://elpa.gnu.org/packages/")))))
(package-initialize)

;; emmet-mode
(add-to-list 'load-path "~/Emacs/emmet/")
(require 'emmet-mode)
(add-hook 'sgml-mode-hook 'emmet-mode)
(add-hook 'html-mode-hook 'emmet-mode)
(add-hook 'css-mode-hook  'emmet-mode)

(require 'cnfonts)

;; music - emms
(add-to-list 'load-path "~/elisp/emms/")
(require 'emms-setup)
(emms-standard)
(emms-default-players)

;; javascript-autocomplete
(require 'js2-mode)
(add-to-list 'auto-mode-alist '("\\.js\\'" . js2-mode))
;; Better imenu
(add-hook 'js2-mode-hook #'js2-imenu-extras-mode)

(require 'js2-refactor)
(require 'xref-js2)

(add-hook 'js2-mode-hook #'js2-refactor-mode)
(js2r-add-keybindings-with-prefix "C-c C-r")
(define-key js2-mode-map (kbd "C-k") #'js2r-kill)

;; js-mode (which js2 is based on) binds "M-." which conflicts with xref, so
;; unbind it.
(define-key js-mode-map (kbd "M-.") nil)

(add-hook 'js2-mode-hook (lambda ()
  (add-hook 'xref-backend-functions #'xref-js2-xref-backend nil t)))
  
  (define-key js2-mode-map (kbd "C-k") #'js2r-kill)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; 主题配色
(load-theme 'wombat t)

;; 字符编码
(prefer-coding-system 'utf-8)
(set-default-coding-systems 'utf-8)
(set-terminal-coding-system 'utf-8)
(set-keyboard-coding-system 'utf-8)

;;取消滚动栏
(set-scroll-bar-mode nil)

;; 显示行号
(global-display-line-numbers-mode)

;; 取消工具栏
(tool-bar-mode nil)

;; 启动窗口的位置和大小
;; (setq initial-frame-alist '((top . 50) (left . 50) (width . 142) (height . 40)))
(setq default-frame-alist
             '((vertical-scroll-bars)
               (top . 50)
               (left . 50)
               (width . 140)
               (height . 40)
               (background-color . "black")
               (foreground-color . "grey")
               (cursor-color . "gold1")
               (mouse-color . "gold1")
               (tool-bar-lines . 0)
               (menu-bar-lines . 1)
               (right-fringe)
               (left-fringe)))

;; 显示时间
(display-time-mode 1);;启用时间显示设置，在minibuffer上面的那个杠上
(setq display-time-24hr-format t);;时间使用24小时制
(setq display-time-day-and-date t);;时间显示包括日期和具体时间
(setq display-time-use-mail-icon t);;时间栏旁边启用邮件设置
(setq display-time-interval 10);;时间的变化频率，单位多少来着？

;; 关闭emacs启动时的画面
;; (setq inhibit-startup-message t)

;;关闭gnus启动时的画面
(setq gnus-inhibit-startup-message t)

;;打开括号匹配显示模式
(show-paren-mode t)

;;括号匹配时可以高亮显示另外一边的括号，但光标不会烦人的跳到另一个括号处。
(setq show-paren-style 'parenthesis)

;打开压缩文件时自动解压缩。
(auto-compression-mode 1)

;; 自动的在文件末增加一新行
(setq require-final-newline t)

;;设置有用的个人信息,这在很多地方有用。
(setq user-full-name "Roger Shen")
(setq user-mail-address "rogershen1492@gmail.com")

;;允许emacs和外部其他程序的粘贴
(setq x-select-enable-clipboard t)

;; 改变 Emacs 固执的要你回答 yes 的行为。按 y 或空格键表示 yes，n 表示 no。
(fset 'yes-or-no-p 'y-or-n-p)

;;让 Emacs 可以直接打开和显示图片。
(setq auto-image-file-mode t)

;;进行语法加亮。
(setq global-font-lock-mode t)

;;在标题栏显示buffer的名字，而不是 emacs@wangyin.com 这样没用的提示
(setq frame-title-format "emacs@%b")

;; 设定不产生备份文件
(setq make-backup-files nil)

;;设置F11快捷键指定Emacs 的日历系统
(global-set-key [f11] 'calendar)

;;设置F12 快速察看日程安排
(global-set-key [f12] 'list-bookmarks)

;;设置我所在地方的经纬度，calendar里有个功能是日月食的预测，和你的经纬度相联系的。
;; 让emacs能计算日出日落的时间，在 calendar 上用 S 即可看到
(setq calendar-latitude +31.23)
(setq calendar-longitude +121.47)
(setq calendar-location-name "上海")

;; 设置阴历显示，在 calendar 上用 pC 显示阴历
(setq chinese-calendar-celestial-stem
["甲" "乙" "丙" "丁" "戊" "己" "庚" "辛" "壬" "癸"])
(setq chinese-calendar-terrestrial-branch
["子" "丑" "寅" "卯" "辰" "巳" "戊" "未" "申" "酉" "戌" "亥"])

;; 设置 calendar 的显示
(setq calendar-remove-frame-by-deleting t)
(setq calendar-week-start-day 1) ; 设置星期一为每周的第一天
(setq mark-diary-entries-in-calendar t) ; 标记calendar上有diary的日期
(setq mark-holidays-in-calendar nil) ; 为了突出有diary的日期，calendar上不标记节日
(setq view-calendar-holidays-initially nil) ; 打开calendar的时候不显示一堆节日



;;-----------日记设置---------------------

(setq diary-file "~/diary/diary");; 默认的日记文件
(setq diary-mail-addr "rogershen1492@gmail.com")
;;(add-hook 'diary-hook 'appt-make-list)
;;当你创建了一个'~/diary'文件，你就可以使用calendar去查看里面的内容。你可以查看当天的事件，相关命令如下 ：
;; d 显示被选中的日期的所有事件
;; s 显示所有事件，包括过期的，未到期的等等

;; 创建一个事件的样例：
;; 02/11/1989
;; Bill B. visits Princeton today
;; 2pm Cognitive Studies Committee meeting
;; 2:30-5:30 Liz at Lawrenceville
;; 4:00pm Dentist appt
;; 7:30pm Dinner at George's
;; 8:00-10:00pm concert

;; 创建事件的命令：
;; i d 为当天日期添加一个事件
;; i w 为当天周创建一个周事件
;; i m 为当前月创建一个月事件
;; i y 为当前年创建一个年事件
;; i a 为当前日期创建一个周年纪念日
;; i c 创建一个循环的事件

;;----------日记设置结束-----------------
```