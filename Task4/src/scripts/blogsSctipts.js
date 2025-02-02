function chooseBlogs(blogs, sortProp, searchVal) {
    
    return blogs.sort(function (a, b) {
        
        if (sortProp === "date")
            return (new Date(b.addInfo.date) - new Date(a.addInfo.date));
        
        else {
            if (a[sortProp] < b[sortProp]) return -1;
                
            if (a[sortProp] > b[sortProp]) return 1;
        }

        return 0;
    }
    ).filter(function (obj) {
        if (obj.title.toLowerCase().includes(searchVal.toLowerCase()))
            return true;

        return false;
    });
};

function filterCategory(blogs, filterVal)
{
    return blogs.filter(function (obj) {
        if (obj.category.toLowerCase().includes(filterVal.toLowerCase())) {
            return true;
        }

        return false;
    });
};

function showBlogs(blogList, sortProperty, searchValue, firstBlog, cond) {
    
    const BLOGS = (cond) ? 
        chooseBlogs(blogList, sortProperty, searchValue)
        : filterCategory(blogList, searchValue);
    
        if (BLOGS.length <= 8)
            return BLOGS;
        else {
            if ((BLOGS.length - firstBlog - 1) < 8)
                return BLOGS.slice(firstBlog, BLOGS.length);
            else
                return BLOGS.slice(firstBlog, firstBlog + 8)
        }
    
};

export {showBlogs, filterCategory, chooseBlogs};

