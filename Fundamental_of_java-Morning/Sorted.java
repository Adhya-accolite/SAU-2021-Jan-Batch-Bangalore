import java.util.*;

public class Sorted{
    public static void main(String [] args) {
        Scanner sc=new Scanner (System.in);
      List<Integer> random=new ArrayList<>();
      int len=sc.nextInt();
      for(int i=0;i<len;i++){
          random.add(sc.nextInt());
     }
  
    //random.add(90);
      Collections.sort(random);
      for(int value:random){
          System.out.print(value+" ");
      }

        
    }
}