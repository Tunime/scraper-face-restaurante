import smtplib

#leemos la informacion del txt
#lee line apor linea
#info=open('main.txt','r')
#for line in info:
#  informacionA.append(line)
#info.close()

#scrivir informacion en un nuevo txt
#scrivir
#------------------
#read=open('clavinfo.list','w')

#for i in range(len(b)):
  #read.write(b[i]+"\n")
#read.close()
#-------------------
info = open('main.txt', 'r')
read=open('clavinfo.json','w')
while True:
    letra = info.read(1)
    if not letra:
        print("End of file")
        break
    if(letra=="'"):
    	 read.write('"')
    else:
    	 read.write(letra)
info.close()
read.close()