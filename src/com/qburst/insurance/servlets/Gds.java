package com.qburst.insurance.servlets;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import com.google.visualization.datasource.DataSourceServlet;
import com.google.visualization.datasource.base.TypeMismatchException;
import com.google.visualization.datasource.datatable.ColumnDescription;
import com.google.visualization.datasource.datatable.DataTable;
import com.google.visualization.datasource.datatable.value.ValueType;
import com.google.visualization.datasource.query.Query;

public class Gds extends DataSourceServlet { 
	
	private static final long serialVersionUID = 1L;
	
	public DataTable generateDataTable(Query query, HttpServletRequest request) {
		
		System.out.println("Request at Google Data Source Servlet");
		System.out.println("Query from Client:"+query);
		
	    // Create a data table,
	    DataTable data = new DataTable();
	    ArrayList cd = new ArrayList();
	    //cd.add(new ColumnDescription("type", ValueType.TEXT, "Policy Type"));
	    cd.add(new ColumnDescription("year", ValueType.TEXT, "Year: 2015"));
	   //cd.add(new ColumnDescription("agent", ValueType.TEXT, "Agent Name"));
	    cd.add(new ColumnDescription("surcount", ValueType.NUMBER, "Surrendered"));
	    cd.add(new ColumnDescription("lapcount", ValueType.NUMBER, "Lapsed"));
	    cd.add(new ColumnDescription("soldcount", ValueType.NUMBER, "Sold"));
	   
	    //cd.add(new ColumnDescription("name", ValueType.TEXT, "Customer Name"));

	    data.addColumns(cd);

	    // Fill the data table.
	    try {
	    	data.addRowFromValues("Jan",100, 188,250);
	    	data.addRowFromValues("Feb",110, 88,50);
	    	data.addRowFromValues("Mar",115, 181,225);
	    	data.addRowFromValues("Apr",15, 118,205);
	    	data.addRowFromValues("May",605, 63,63);
	    	data.addRowFromValues("Jun",135, 58,125);
	    	data.addRowFromValues("Jul",16, 68,250);
	    	data.addRowFromValues("Aug",10, 78,5);
	    	data.addRowFromValues("Sep",100, 28,55);
	    	data.addRowFromValues("Oct",108, 18,65);
	    	data.addRowFromValues("Nov",170, 18,35);
	    	data.addRowFromValues("Dec",34, 18,25);
	    	
	      

	    } catch (TypeMismatchException e) {
	      
	    	System.out.println(""+e);
	    }
	    return data;
	  }
	
	 @Override 
	  protected boolean isRestrictedAccessMode() { 
	    return false; 
	  }

}

/*data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "XYZ Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Medical", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "ABC Corp", "Male");
data.addRowFromValues("Life", "XYZ Corp", "Male");
data.addRowFromValues("Life", "XYZ Corp", "Male");
data.addRowFromValues("Life", "XYZ Corp", "Male");
data.addRowFromValues("Life", "XYZ Corp", "Male");
data.addRowFromValues("Life", "XYZ Corp", "Male");
data.addRowFromValues("Life", "QWER Corp", "Male");
data.addRowFromValues("Life", "QWER Corp", "Male");
data.addRowFromValues("Life", "QWER Corp", "Male");
data.addRowFromValues("Life", "QWER Corp", "Male");
data.addRowFromValues("Life", "QWER Corp", "Female");
data.addRowFromValues("Life", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "QWER Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Female");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");
data.addRowFromValues("Vehicle", "XYZ Corp", "Male");*/
