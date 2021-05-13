using System;

namespace CSharp.Stacks
{
    public class SimpleStack
    {
        Position last;

        public void Stack(object newItem)
        {
            last = new Position(last, newItem);
        }

        public object Unstack(){
            if(last == null){
                
                throw new InvalidOperationException();
            }

            object result = last.item;
            last = last.previous;
            return result;

        }

        class Position
        {
            public Position previous;
            public object item;

            public Position(Position next, object item)
            {
                this.previous = next;
                this.item = item;
            }
        }
    }
}