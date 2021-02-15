1. Open GitBush Terminal and type ssh-keygen. Then press 3times "enter". This what you should get
   ![img](C:\Users\Admin\Documents\HYF\notes\image.png)

2. Find this folder on your PC (now you have ssh-key right there): PC→DiskC→Users→Administrator→.ssh Open this folder and go to View put 2 check marks for "File name extensions" and "Hidden items" So you'll get 2 files there: id_rsa and id_rsa.pub
   ![img](<C:\Users\Admin\Documents\HYF\notes\image(1).png>)

3. Open id_rsa.pub with any text editor(I use notepad) and copy contents of id_rsa.pub. Go to your account on GitHub→Settings→SSH and GPG key→Add an SSH key. Paste in "Key" that contents. Give any name to Title. End than press "Add key" Congrats ssh is connected to your GitHub!
