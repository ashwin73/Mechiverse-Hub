
import sem1Resources from '@/data/semesters/sem1Resources';
import sem2Resources from '@/data/semesters/sem2Resources';
import sem3Resources from '@/data/semesters/sem3Resources';
import sem4Resources from '@/data/semesters/sem4Resources';
import sem5Resources from '@/data/semesters/sem5Resources';
import sem6Resources from '@/data/semesters/sem6Resources';
import sem7Resources from '@/data/semesters/sem7Resources';
import sem8Resources from '@/data/semesters/sem8Resources';
import sem9Resources from '@/data/semesters/sem9Resources';
import sem10Resources from '@/data/semesters/sem10Resources';

const coreCourseResourcesBySemester: { [semester: string]: typeof sem1Resources } = {
  '1': sem1Resources,
  '2': sem2Resources,
  '3': sem3Resources,
  '4': sem4Resources,
  '5': sem5Resources,
  '6': sem6Resources,
  '7': sem7Resources,
  '8': sem8Resources,
  '9': sem9Resources,
  '10': sem10Resources,
};

export default coreCourseResourcesBySemester;
