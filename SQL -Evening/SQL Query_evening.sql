create table country(country_id int not null unique, 
country_name varchar(20),
primary key(country_id)
);

create table team(team_id varchar(5) primary key,
team_name varchar(20) ,
 country_name varchar(20), 
 team_pos int, won numeric(3), 
 draw numeric(3), lose numeric(3)
 );
 
 create table players(
 player_id numeric(5) primary key, 
 team_id varchar(5),
 Player_type varchar(20) check(Player_type IN ('Batsman', 'All_rounder', 'Bowler')),
matches numeric(5),
six numeric(5),
four numeric(5),
totalrun numeric(10),
wickets numeric(2));
    
    insert into country values(101, 'IND');
	insert into country values(102, 'AUS');
	insert into country values(103, 'AFG');
	insert into country values(104, 'NZ');
	insert into country values(105, 'PAK');
	insert into country values(106, 'SA');
    
insert into team values(
    'IND1','INDIA','IND', 2, 5, 1,0);
insert into team values(
    'AUS2','Australia','AUS', 1, 6, 2,1);
insert into team values(
    'NZ4','New Zealand','NZ', 3, 4, 3,2);
insert into PLAYERS values (
    '201', 'IND1','Batsman',13,7,24,800,0
);


insert into PLAYERS values (
    '202', 'IND1','Bowler',12,1,2,50,10);
insert into PLAYERS values (
    '203', 'IND1','Batsman',13,4,21,700,0);
insert into PLAYERS values (
    '204', 'IND1','All_rounder',13,2,10,100,7);
insert into PLAYERS values (
    '205', 'IND1','All_rounder',14,5,14,150,7);
insert into PLAYERS values (
    '206', 'IND1','Bowler',14,2,8,150,12);
insert into PLAYERS values (
    '207', 'AUS2','Batsman',13,8,22,801,1);
insert into PLAYERS values (
    '208', 'AUS2','All_rounder',13,4,15,500,5);
insert into PLAYERS values (
    '209', 'AUS2','Bowler',12,5,10,300,8);
insert into PLAYERS values (
    '210', 'AUS2','Batsman',13,10,32,808,0);
insert into PLAYERS values (
    '211', 'AUS2','All_rounder',12,7,20,750,5);
insert into PLAYERS values (
    '212', 'AUS2','Bowler',12,5,10,300,8);
insert into PLAYERS values (
    '213', 'AUS2','Bowler',13,5,10,350,8);
insert into Players values(
'214','NZ4','Batsman',10,4,10,500,1);
insert into Players values(
'215','NZ4','Bowler',10,2,10,250,10);
insert into Players values(
'216','NZ4','All_rounder',10,5,10,500,4);

/* To check the sample data */
select * from country;
select * from team;
select * from players;

/* query b: fetch the top 5 batsmen     */
select * from players where Player_type IN('Batsman','All_rounder')  order by totalrun  desc limit 5;

/* query c : fetch the top 5 bowlers     */
select * from players where Player_type IN('Bowler','All_rounder')  order by wickets desc limit 5;

/* query d: average score of each team    */
select avg(totalrun/matches)as AVG_SCORE from players group by team_id; 


/* query e : increment totalrun by 10 in batsman */
Set @least_avg=(select avg(totalrun/matches)from players group by team_id order by avg(totalrun/matches) limit 1);
update players
 set totalrun=totalrun+10
 where Player_type='Batsman' and totalrun/matches<@least_avg;
 
 
create table least_avgs(team_id varchar(5),least_avg_score double );
insert into least_avgs (select team_id,avg(totalrun/matches)from players group by team_id order by avg(totalrun/matches) limit 1);
update players inner join least_avgs on players.team_id=least_avgs.team_id
set players.totalrun=players.totalrun+10
where players.Player_type='Batsman' ;


/* query f : create procedure to fetch max run of a country    */
delimiter $$
DROP PROCEDURE IF EXISTS worldcup$$
CREATE PROCEDURE worldcup(value1 VARCHAR(20), OUT total INT)
BEGIN
SELECT max(players.totalrun), country.country_name from country inner join team on team.country_name =country.country_name 
inner join players on players.team_id = team.team_id group by country.country_name having country.country_name=value1;
END$$ 

DELIMITER ;
CALL worldcup('AUS',@total);
SELECT @total;


