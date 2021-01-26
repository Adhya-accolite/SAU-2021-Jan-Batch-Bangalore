package advance;

import java.io.BufferedReader;

import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Stream;


public class Assignment 
{
     @SuppressWarnings("deprecation")
	public static void main(String[] args) throws IOException,ClassNotFoundException, SQLException
     {
    	 
 		List<Integer> randomArray =new ArrayList<>();
 		FileOutputStream out= new FileOutputStream("random.txt");
 		
 		int value = 1;
 		
    	 Random rand = new Random(); 
    	//Generate the number and put in the file random.txt 
    	 while(value%5!=0) {
    		  value = rand.nextInt(101);
    		  String a = new Integer(value).toString();
              a = a + ' ';
              out.write(a.getBytes());
              out.write(',');
    		  Integer inputted=value;
    		  randomArray.add(inputted);
    		  
    		  
         
     }
    	System.out.println(" ======================================================================");
    	// Read the value from file
    	
    	 BufferedReader in = new BufferedReader(new FileReader("random.txt"));
    	 String str;
    	 while ((str = in.readLine())!= null) {
             String[] ar=str.split(",");
             for(String s:ar) {
            	 System.out.print(s);
             }
              
         }
    	 System.out.println();
    	 System.out.println(" ======================================================================");
    	 // Use of stream api
    	 Integer ids =randomArray.stream().filter(e -> e%5 == 0).map(e -> e*2).findFirst().get();
         System.out.println(ids);
 		
         // Insert the id and name in the database
         
         Class.forName("com.mysql.cj.jdbc.Driver"); 
 		
 		String url = "jdbc:mysql://remotemysql.com:3306/sMkXvyYxZM";
 		
 		String username = "sMkXvyYxZM";
 		String	passowrd = "8h9tWhCKws";
 		
 		Connection connection = DriverManager.getConnection(url, username, passowrd);
 		
        String query = "insert into test "
    			+ " (id, name)" + " values (?, ?)";

    	PreparedStatement stmt = connection.prepareStatement(query);
String id=ids.toString();
    	stmt.setString(1, id);
    	stmt.setString(2, "Adhya");
stmt.executeUpdate();
		
		//while(result.next()) {
		  //  String value1 = result.getString("id");
		   // String name = result.getString("name");
		   // System.out.println("id,Name - " + value1 + "," + name); 
		//}
		in.close();
		out.close();
		connection.close();

    	 }

	
}