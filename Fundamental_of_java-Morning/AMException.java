import java.util.*;

public class AMException {

public static void main(String []args){
    try{
        Scanner sc= new Scanner(System.in);
        int val=10;
        System.out.println("Type 0 for default:\n"+
        "Type 1 for throw:\n"+
        "Type 2 for throws:\n");
        int num=sc.nextInt();
        if(num==1){
            throw new ArithmeticException("Example of throw exception");
        }
        else if(num==2){
            int [] a=new int[5];
            try{
                fetch(a);
            }
            catch(Exception e){
                System.out.println(e.getMessage());
            }
        }
        else{
            int div=Divide(val,0);
        }
     
    }
    catch(ArithmeticException e){
        System.out.println(e.getMessage());
    }
}
static int Divide(int num1, int num2){
    return num1/num2;
}
static int fetch(int [] a) throws ArithmeticException{
    return a[6];
}

}
