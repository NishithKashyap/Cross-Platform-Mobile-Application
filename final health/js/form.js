document.getElementById("bt1").addEventListener("click",fn)
l=window.localStorage;
function fn()
{
    nm=document.getElementById("id0").value;
    drnm=document.getElementById("id1").value;
    
    var m1=document.getElementById("id2").value;
    var t1=document.getElementById("id3").value;
    t11=document.getElementById("i1").value;
    console.log(m1)
    
    m2=document.getElementById("id4").value;
    t2=document.getElementById("id5").value;
    t12=document.getElementById("i1").value;
    
    m3=document.getElementById("id6").value;
    t3=document.getElementById("id7").value;
    t13=document.getElementById("i1").value;
    
    m4=document.getElementById("id8").value;
    t4=document.getElementById("id9").value;
    t14=document.getElementById("i1").value;
    
    m5=document.getElementById("id10").value;
    t5=document.getElementById("id11").value;
    t15=document.getElementById("i1").value;
    
    m6=document.getElementById("id12").value;
    t6=document.getElementById("id13").value;
    t16=document.getElementById("i1").value;
    
    m7=document.getElementById("id14").value;
    t7=document.getElementById("id15").value;
    t17=document.getElementById("i1").value;
    
    m8=document.getElementById("id16").value;
    t8=document.getElementById("id17").value;
    t18=document.getElementById("i1").value;
    
    m9=document.getElementById("id18").value;
    t9=document.getElementById("id19").value;
    t19=document.getElementById("i1").value;
    
    m10=document.getElementById("id20").value;
    t10=document.getElementById("id21").value;
    t20=document.getElementById("i1").value;
    
    l.setItem("Name",nm);
    l.setItem("Doctor Name",drnm);
    
    
    l.setItem("Medicine 1",m1);
    l.setItem("Time of m1",t1);
    l.setItem("Time2 of m1",t11);
    
    l.setItem("Medicine 2",m2);
    l.setItem("Time of m2",t2);
    l.setItem("Time2 of m2",t12);
    
    l.setItem("Medicine 3",m3);
    l.setItem("Time of m3",t3);
    l.setItem("Time2 of m3",t13);
    
    l.setItem("Medicine 4",m4);
    l.setItem("Time of m4",t4);
    l.setItem("Time2 of m4",t14);
    
    l.setItem("Medicine 5",m5);
    l.setItem("Time of m5",t5);
    l.setItem("Time2 of m5",t15);
    
    l.setItem("Medicine 6",m6);
    l.setItem("Time of m6",t6);
    l.setItem("Time2 of m6",t16);
    
    l.setItem("Medicine 7",m7);
    l.setItem("Time of m7",t7);
    l.setItem("Time2 of m7",t17);
    
    l.setItem("Medicine 8",m8);
    l.setItem("Time of m8",t8);
    l.setItem("Time2 of m8",t18);
    
    l.setItem("Medicine 9",m9);
    l.setItem("Time of m9",t9);
    l.setItem("Time2 of m9",t19);
    
    l.setItem("Medicine 10",m10);
    l.setItem("Time of m10",t10);
    l.setItem("Time2 of m10",t20);

}