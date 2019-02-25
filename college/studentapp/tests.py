class maths:
    def __init__(self, x, y):
        self.a = y
        self.b = x

    def add(self):
        return self.a + self.b;

    def sub(self):
        return self.a - self.b;

    def save(self):
        #save in to database

    # def __str__(self):
    #     return 'vikram'

    # def __unicode__(self):
    #     return 'vikram'



print(maths(100,20).add())