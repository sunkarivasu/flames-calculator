var calculateButton = document.getElementsByName('calculate-btn')[0];
calculateButton.addEventListener('click',function()
{
    var name = document.getElementsByName('yourName')[0].value;
    var crushname = document.getElementsByName('yourCrushName')[0].value;
    var resultantname ="";
    var resultantcrushname=crushname;
    for(var i=0;i<name.length;i++)
    {
        var flag=true;
        for(var j=0;j<crushname.length;j++)
        {
            if(name[i]==crushname[j])
            {
                flag=false;
                resultantcrushname=resultantcrushname.replace(crushname[j],'');
            }
        }
        if(flag)
            resultantname+=name[i]
    }
    var totalLength = resultantname.length+resultantcrushname.length;
    var flames="FLAMES"
    present=0;
    while(flames.length!=1)
    {
        present=(present+totalLength)%flames.length;
        flames=flames.replace(flames[present],'');
    }
    var relation="";
    switch(flames)
    {
        case 'F':
            relation="Friends";
            break;
        case 'L':
            relation="Lovers";
            break;
        case 'A':
            relation="Affaction";
            break;
        case 'M':
            relation="Marraige";
            break;
        case 'E':
            relation="Enemies";
            break;
        case 'S':
            relation="Sister";
            break;        

    }
    var relationship = document.getElementsByClassName('relation')[0];
    relationship.innerHTML=relation;
})
