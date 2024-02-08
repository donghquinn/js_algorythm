const solution = ( my_string, n ) =>
{
    const returnData = [];

    for ( let item of my_string ) {
        returnData.push( item.repeat( n ) );
    }

    return returnData;
}

console.log( solution( "hello" ) );