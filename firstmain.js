var output = [];
		
		this.columns.forEach((column) => {
			output.push(column.getDefinition(true));
		});
		
		return output;
	}

var output = [],
		columns = structured ? this.columns : this.columnsByIndex;
		
		columns.forEach((column) => {
			output.push(column.getComponent());
		});
		
		return output;//yes
	}
if(from.parent.isGroup){
			this._moveColumnInArray(from.parent.columns, from, to, after);
		}else{
			this._moveColumnInArray(this.columns, from, to, after);
		}
		
		this._moveColumnInArray(this.columnsByIndex, from, to, after, true);
		
		this.rerenderColumns(true);
		
		this.dispatch("column-moved", from, to, after);
		
		if(this.subscribedExternal("columnMoved")){
			this.dispatchExternal("columnMoved", from.getComponent(), this.table.columnManager.getComponents());
		}
	}
//nice
