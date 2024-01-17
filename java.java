import java.util.*;

import javax.print.event.PrintJobListener;
class java{


public static void main(String[] args)
{
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt();
    
       // int n = scn.nextInt();
        int[] numbers = new int[n];
        for(int i = 0; i < n; i++){
            numbers[i] = scn.nextInt();
        }
      //  int[] res = evenOdd(numbers);

        // for(int i = 0; i < res.length;i++){
        //     System.out.print(res[i] + " ");
        // }
        for(int j=0;j<numbers.length;j++){
            System.out.print(numbers[j]+" ");
        }
       // System.out.println(numbers);
    }
   
}




/*
 f
    int arr[]= new int[numbers.length];
    int count = 0;
    for(int i =0;i<numbers.length;i++){
    if(numbers[i]%2==0){
    arr[count]=numbers[i];
    count++;
    }
    
    for(int j = 0;j<numbers.length;j++){
        if(numbers[j]%2!=0){
            arr[count]=numbers[j];
            count++;
        }
    }
    
    }return arr;
}
 */