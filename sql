SQL> declare
a number(2):=10;
begin
<<loopstart>>
--while loop execution
while a<20 loop
dbms_ouput.put_line('Value of s:'||a);
a:=a+1;
if a=15 then
a:=a+1;
goto loopstart;
end if;
end loop;
end;
/